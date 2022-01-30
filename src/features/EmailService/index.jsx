
import componentLoader from '../../componentLoader';
import componentPackage from './componentsPackage';

const emailServiceStyle = {
  backgroundColor: '#e8846d',
  width: '100%',
};


const featuresFlag = [''];

const EmailService = () => {

  const components = componentLoader({package: componentPackage, featuresFlag});


  console.log( components)
  return (
    <div className='EmailService' style={emailServiceStyle}>
      <h3>Email Service</h3>
    </div>
  );
}

export default EmailService;
