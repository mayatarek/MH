import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function SignUp(){
    const {register, handleSubmit} = useForm();
    const Navigate = useNavigate();

    return(
        <div class="card">
            <form>
                <lable htmlFor="email">Email</lable><br/>
                <input type="email" placeholder="johndoe@gmail.com" id="email" {...register("email",{
                pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email'
                }})}/>
                <br/>
                <lable htmlFor="password">Password</lable><br/>
                <input type="password" placeholder="" id="password"/>
                <br/>
                <button onClick={() =>{Navigate('/login')}}>Register</button>
            </form>
        </div>
    )
}

export default SignUp