import * as React from 'react';
import _ from 'lodash';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
}

export function Textarea({
  label,
  errorMessage = `Please enter a valid ${_.lowerCase(label)}`,
  ...props
}: TextareaProps) {
  const [isError, setIsError] = React.useState(false);
  return (
    <div className="flex flex-col gap-2 mb-6">
      <label htmlFor={_.kebabCase(label)}>{label}</label>
      <textarea
        id={_.kebabCase(label)}
        onErrorCapture={() => setIsError(true)}
        className="rounded py-2 px-3 bg-transparent border border-gray-700 dark:border-gray-300"
        {...props}
      />
      {isError && <p className="text-fuchsia-400">{errorMessage}</p>}
    </div>
  );
}
