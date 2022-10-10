export interface UserI{
    email:string;
    uid:string;
}

export interface UserProfileI{
    id:string,
    data:{
        avatar:string;
        profileName:string;
        uid:string
    }
}