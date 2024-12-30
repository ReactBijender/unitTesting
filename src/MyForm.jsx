import useFormValidation from "./useFormValidation";
const validation = (data) => {
    const error = {name: "", email: ""};
    if(!data.name){
        error.name = "Name is required!";
    } 
    else if(data.name.length<4){
        error.name = "Name is required atleast 5 charcter!";
    } 
    if(!data.email){
        error.email = "Email is required!";
    }
    return error;
}
const MyForm = () => {
   const [state,  handleChange, handleSubmit, errors] = useFormValidation({name: "", email: ""}, validation);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' data-testid="name-input" onChange={handleChange}/>{state.name}
                {errors?.name && <span data-testid="error-name-message">{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' data-testid="email-input" onChange={handleChange}/>{state.email}
                {errors?.email && <span data-testid="error-email-message">{errors.email}</span>}
            </div>
            <button type="submit" data-testid="submit-button">Submit</button>
        </form>
    )
}

export default MyForm;