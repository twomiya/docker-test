export default {
    "POST /api/teacher_token":(req, res) => {
        res.send({
            success: true,
            msg: '登陆成功',
            result: {
                "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDEzODUwNDYsInN1YiI6MSwibmFtZSI6InRocml2ZSJ9.OdL2Pl3oaJUDpbUhaU8IyyD-2wUtfmHBhS8k_Jx4ET4"
            }
        });
    },
    

}