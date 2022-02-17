import Alert from 'react-bootstrap/Alert';


export default function AlertBanner(message, variant) {
    const alertMessage = message || "An unexpected error occurred. Please try again later."

    const variant = variant || 'danger';

    return (<Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
        {alertMessage}
    </Alert>)

}