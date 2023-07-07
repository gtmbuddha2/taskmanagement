import { AlertProp } from './alert.interface';
import { headingType } from './alert.interface';
import { useState } from 'react';

const Alert = ({
  type = headingType.information,
  heading,
  children,
  closable,
  onClose,
}: AlertProp) => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }

  const handleCloseClick = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="text-black bg-gray-300 rounded-xl p-6">
      <div className="mb-2">
        <span
          className="mr-3"
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠' : 'i'}
        </span>
        <span className="text-xl">{heading}</span>
      </div>
      {closable && (
        <button
          aria-label="Close"
          className="cursor-pointer bg-red-200 hover:bg-red-300 p-1 mt-2 mb-2 rounded-md"
          onClick={handleCloseClick}
        >
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div className="text-base">{children} </div>
    </div>
  );
};

export default Alert;
