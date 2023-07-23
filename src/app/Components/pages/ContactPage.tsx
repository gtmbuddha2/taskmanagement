import { useForm, FieldError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();
  const navigate = useNavigate();

  const fieldStyle = 'flex flex-col mb-2';

  function onSubmit(contact: Contact) {
    console.log('Submitted details:', contact);
    navigate(`/thank-you/${contact.name}`);
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        If you enter your details we'll get back to you as soon as we can.
      </p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'You must enter your name' })}
            className={getEditorStyle(errors.name)}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'You must enter your email address',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            className={getEditorStyle(errors.email)}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            id="reason"
            {...register('reason', {
              required: 'You must enter the reason you are contacting us',
            })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes')} />
        </div>
        <div className={fieldStyle}>
          <button
            type="submit"
            className="rounded-md mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
