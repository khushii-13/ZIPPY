const register = async (req, res)=>{
try {
    return res.status(200).json({
        message: "user created successfully",
    });
} catch (error) {
    
}
}

const login = async (req, res)=> {
try {
    return res.status(200).json({
        message: "user login successfully",
    });
} catch (error) {
    
}
}

module.exports = {register,login};