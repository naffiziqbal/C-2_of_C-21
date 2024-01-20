import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';

const dummyComments = [
  'Bhalo na',
  'Ki shob ghori egula??',
  'Eta kono product holo ??',
  '200 taka dibo, hobe ??',
];

export default function ProductReview() {
  const [text, setText] = useState('');

  const handleValueChange = (e: any) => {
    const data = e.target.value;
    // console.log(data);
    setText(data);
  };
  const handleSubmit = () => {
    console.log(text);
    console.log(' Submit');
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea
          className="min-h-[30px]"
          name="comment"
          defaultValue={''}
          onChange={handleValueChange}
        />
        <Button
          className="rounded-full h-10 w-10 p-2 text-[25px]"
          onClick={handleSubmit}
        >
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {dummyComments.map((comment, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
