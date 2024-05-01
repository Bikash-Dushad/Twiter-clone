const User = require('../models/user')
const Text = require('../models/text')


module.exports.homepage =async (req, res)=>{
    if(req.cookies.user_id){
        var user = await User.findById(req.cookies.user_id);
        var text = await Text.find({}).populate('user')
        if(user){
                return res.render('homepage',{
                    user: user,
                    text: text,
                })
        }else{
            console.log("user not found or not authorized");
            // req.flash('error', "signin first")
            return res.redirect("/auth/signinpage")
        }
    }else{
        // req.flash('error', "signin first")
        return res.redirect("/auth/signinpage")
    }
}

module.exports.addtext = async function(req, res){
    try {
        var content = req.body.content;
        console.log(content)
        var user = req.cookies.user_id
        var text = await Text.findOne({
            content: content,
            user: user
        }).populate()
        if(text){
            console.log("text already exist")
            return res.redirect('back')
        }else{
        var newText = await Text.create({content: content, user: user}) 
        console.log(newText)
        
        return res.redirect('back')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports.deletetext = async function(req, res){
   try {
     var text = await Text.findById(req.params.id);

     if(text.user == req.cookies.user_id){
        await Text.deleteOne({ _id: text._id });
         return res.redirect('back')
     }else{
         console.log("not authorized")
         return res.redirect('back')
     }
   } catch (error) {
    console.log(error)
   }
}

module.exports.updatetext = async function(req, res){
    try {
        var user = req.cookies.user_id;
        var textId = req.params.id; // Retrieve the text ID from request parameters
        var texttoupdate = req.body.texttoupdate;

        // Find the text by ID and update its content
        var updatedText = await Text.findByIdAndUpdate(textId, { content: texttoupdate });

        console.log(updatedText);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}
