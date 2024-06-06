const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { render } = require('ejs');

// connect to mongodb
const dbURI = 'mongodb+srv://rameez:test123@nodetuts.tnlbhk6.mongodb.net/nodde-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//mongoose.connect(dbURI);

//express app
const app = express();

// register view engine
app.set('view engine','ejs');

// listen for requests
//app.listen(3000);

// middleware and static files
app.use(express.static('public')); //public folder can me made and from browser we can access contents inside this particular file
app.use(express.urlencoded({  extended: true  })); // done for form post requests when pressed submit for logging into the console;
app.use(morgan('dev'));

// // mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res) =>{
//     const blog = new Blog({
//         title:'new blog ',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
//     blog.save()
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) =>{
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req,res) =>{
//     Blog.find()
//         .then((result) =>{
//             res.send(result);
//         })
//         .catch((err) =>{
//             console.log(err);
//         });
// });

// app.get('/single-blog', (rex,res) =>{
//     Blog.findById('665d9d87f7a06e44f2ea5e56')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) =>{
//             console.log(err);
//         });
// });


//routes
app.get('/', (req,res) =>{
    res.redirect('/blogs');
});

app.get('/about', (req,res) =>{
    res.render('about',{title: 'About'});
});

// blog routes
app.get('/blogs', (req,res) =>{
    Blog.find().sort({createdAt: -1})
        .then((result) =>{
            res.render('index',{title: 'All Blogs', blogs:result})
        })
        .catch((err) =>{
            console.log(err);
        })
});

app.post('/blogs', (req,res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result) =>{
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/blogs/:id', (req,res) => {
    const id = req.params.id;
    //console.log(id);
    Blog.findById(id)
        .then((result) =>{
            res.render('details', {blog: result, title:'Blog Details'});
        })
        .catch(err => {
            console.log(err);
        })
})

app.delete('blogs/:id', (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then( result =>{
            res.json({ redirect: '/blogs'});
        })
        .catch(err =>{
            console.log(err);
        });
});

app.get('/blogs/create',(req,res) =>{
    res.render('create',{title: 'Create a New Blog'});
});

// 404 page
app.use((req,res) =>{
    res.status(404).render('404',{title: '404'});
});
