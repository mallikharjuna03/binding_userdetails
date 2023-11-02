export function Users() 
{
    let name="Mallikharjuna";
    let email = "malli@gmail.com";   
    let phone = 9988432512;     
    let gender = "Male";      
    let dob = "02/11/2023";
    return <>
    <div className="margin-20">
        <div className="margin-10"> 
        <label>Name:</label>
        <label>{name}</label>
        </div>
        <div className="margin-10">    
        <label>Email:</label> 
        <label>{email}</label>   
        </div>  
        <div className="margin-10">
        <label>Phone:</label>
        <label>{phone}</label>    
        </div>
        <div className="margin-10">   
        <label>Gender:</label>
        <label>{gender}</label>
        </div>
        <div className="margin-10">
        <label>DOB:</label>
        <label>{dob}</label>
        </div>
    </div>

   </>
}    

