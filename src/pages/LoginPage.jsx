import LoginForm from '../components/shared/forms/FormLogin';
import AuthLayouts from '../layout/AuthLayout';

export default function LoginPage() {
    return (
        <AuthLayouts>
            <LoginForm />
        </AuthLayouts>
    );
}
