import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Successfully created!');
toast.error('This is an error!');
toast.loading('Waiting...');

const HotToast= () => {
  return (
    <div>
      <button onClick={notify}>toast</button>
      <Toaster />
    </div>
  );
};
export default HotToast;