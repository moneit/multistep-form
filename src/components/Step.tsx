import React from 'react';
import classnames from 'classnames';

interface IStepProps {
  step: number;
  title: string;
  description: string;
  isCurrentStep: boolean;
  completed: boolean;
  onClick?: () => void;
}

export const Step = ({
  step,
  title,
  description,
  isCurrentStep,
  completed,
  onClick
}: IStepProps) => {
  return (
    <div
      className={classnames(
        "flex items-center w-full bg-gray-400 border-r cursor-pointer",
        {'!bg-success': completed},
        {'!bg-yellow': isCurrentStep}
      )}
      onClick={onClick}
    >
      <div className="w-full mr-3">
        <h2 className="text-2xl text-right w-full text-white uppercase font-medium">
          {title}
        </h2>
        <p className="text-right text-sm text-white">{description}</p>
      </div>
      <div className="text-white flex items-center justify-center text-8xl rounded-full ml-auto">
        {step}
      </div>
    </div>
  )
};
