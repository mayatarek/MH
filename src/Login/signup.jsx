import {useForm} from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';

function SignUp(){
    const {register, handleSubmit} = useForm();
    const Navigate = useNavigate();

    return(
        <div class="card">
        <h3>SignUp</h3>
        <form>
            <div style={{textAlign: 'left'}}>
            <label>Email</label><br/>
            <input type="email" placeholder="johndoe@example.com" id="email" {...register("email",{
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email'
            }})}/><br/>
            <label>Name</label><br/>
            <input type="text" placeholder="John Doe" id="name"/><br/>
            <label>Age</label><br/>
            <input type="text" placeholder="23" id="name"/><br/>
            <label>Phone number</label><br/>
            <input type="text" placeholder="01XXXXXXXXX" id="name"/><br/>
            <label for="gender">Gender</label><br/>
            <select id="gender" name="gender">
            <option value="female" selected>Female</option>
            <option value="male">Male</option>
            </select><br/>

            <lable>Password</lable><br/>
            <input type="password" placeholder="" id="password"/>
            <br/>
            </div>
            <button style={{marginTop:12}}>submit</button>

        </form>

        <hr/>
        
        <Link to="/login" >Registered user? Log in!</Link>
        <Link to="/signup" style={{color: 'grey'}}>or continue as guest</Link>
        
    </div>
    )
}

export default SignUp