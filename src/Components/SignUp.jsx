import { useFormik } from 'formik';
import { basicSchema } from '../schema';

const onSubmit = async (values, actions) => {
	console.log(values);
	console.log(actions);
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
	actions.resetForm();
};

const SignUp = () => {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			age: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: basicSchema,
		onSubmit,
	});
	console.log(errors);
	return (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<label htmlFor='firstname'>First Name</label>
			<input
				value={values.firstname}
				onChange={handleChange}
				id='firstname'
				type='text'
				placeholder='Enter your first name'
				onBlur={handleBlur}
				className={errors.firstname && touched.firstname ? 'input-error' : ''}
			/>
			{errors.firstname && touched.firstname ? (
				<p className='error'>{errors.firstname}</p>
			) : null}
			<label htmlFor='lastname'>Last Name</label>
			<input
				value={values.lastname}
				onChange={handleChange}
				id='lastname'
				type='text'
				placeholder='Enter your last name'
				onBlur={handleBlur}
				className={errors.lastname && touched.lastname ? 'input-error' : ''}
			/>
			{errors.lastname && touched.lastname ? (
				<p className='error'>{errors.lastname}</p>
			) : null}
			<label htmlFor='email'>Email</label>
			<input
				value={values.email}
				onChange={handleChange}
				id='email'
				type='text'
				placeholder='Enter your email'
				onBlur={handleBlur}
				className={errors.email && touched.email ? 'input-error' : ''}
			/>
			{errors.email && touched.email ? <p className='error'>Email</p> : null}
			<label htmlFor='age'>Age</label>
			<input
				value={values.age}
				onChange={handleChange}
				id='age'
				type='text'
				placeholder='Enter your age'
				onBlur={handleBlur}
				className={errors.age && touched.age ? 'input-error' : ''}
			/>
			{errors.age && touched.age ? <p className='error'>{errors.age}</p> : null}
			<label htmlFor='age'>Password</label>
			<input
				value={values.password}
				onChange={handleChange}
				id='password'
				type='password'
				placeholder='Enter your password'
				onBlur={handleBlur}
				className={errors.password && touched.password ? 'input-error' : ''}
			/>
			{errors.password && touched.password ? (
				<p className='error'>{errors.password}</p>
			) : null}
			<label htmlFor='age'>Confirm Password</label>
			<input
				value={values.confirmPassword}
				onChange={handleChange}
				id='password'
				type='password'
				placeholder='Confirm Password'
				onBlur={handleBlur}
				className={
					errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''
				}
			/>
			{errors.confirmPassword && touched.confirmPassword ? (
				<p className='error'>{errors.confirmPassword}</p>
			) : null}
			<button disabled={isSubmitting} type='submit'>
				Submit
			</button>
		</form>
	);
};

export default SignUp;
