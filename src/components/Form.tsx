import { FormEvent } from 'react';

interface IProps {
  title: string;
  buttonText: string;
  onSubmit: (event: FormEvent) => void;
}

const Form: React.FC<IProps> = ({ title, buttonText, onSubmit, children }) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form__wrapper">
        <h1 className="form__title">{title}</h1>
        {children}
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export default Form;
