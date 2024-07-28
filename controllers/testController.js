export const TestPostController =(req,res)=>{
    const {name}= req.body
    res.send(200).send(`Your name is ${name}`)
}


