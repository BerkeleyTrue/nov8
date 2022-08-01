import { FunctionComponent } from 'react';

import { Toast } from './Toast';
import { useToasts } from './Contexts';

export const ToastContainer: FunctionComponent = () => {
  const { toasts } = useToasts();

  return (
    <div id='toast-container' className='absolute bottom-10 z-50 w-full'>
      <div className='mx-auto max-w-xl'>
        {toasts.map((toast) => (
          <Toast
            id={toast.id}
            key={toast.id}
            type={toast.type}
            message={toast.message}
          />
        ))}
      </div>
    </div>
  );
};
