import { AlertProp } from '../interfaces/alert.interface';
import { headingType } from '../interfaces/alert.interface';
import { useEffect, useState } from 'react';
import { ReactComponent as WarningIcon } from '../../assets/warning.svg';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';

const Alert = ({
  type = headingType.information,
  heading,
  children,
  closable,
  onClose,
}: AlertProp) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => console.log('Some effect'), [visible]);

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
    <div
      className={`text-black bg-gray-300 rounded-md inline-flex flex-col text-left px-4 py-3 border-transparent border-spacing-1 ${
        type === 'warning' ? 'text-amber-900' : 'text-teal-900'
      } ${type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'}`}
    >
      <div className="mb-1 flex items-center">
        <span
          className="w-7"
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? (
            <WarningIcon className="fill-amber-900 w-5 h-5" />
          ) : (
            <InfoIcon className="fill-teal-900 w-5 h-5" />
          )}
        </span>
        <span className="font-bold">{heading}</span>

        {closable && (
          <button
            aria-label="Close"
            className="border-none bg-transparent ml-auto cursor-pointer p-1 mt-2 mb-2 rounded-md"
            onClick={handleCloseClick}
          >
            <span role="img" aria-label="Close">
              <CrossIcon />
            </span>
          </button>
        )}
      </div>
      <div className="text-base ml-7 text-black">{children} </div>
    </div>
  );
};

export default Alert;
