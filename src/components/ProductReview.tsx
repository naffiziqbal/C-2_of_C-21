import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import {
  useGetCommentsQuery,
  usePostCommentMutation,
} from '@/redux/apis/productApi';

export default function ProductReview({ id }) {
  // console.log(id);
  const [comment, setComment] = useState('');
  const { data } = useGetCommentsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  // const { comments } = data;

  const [postComment, { isError, isLoading, isSuccess }] =
    usePostCommentMutation();

  const handleValueChange = (e: any) => {
    const data = e.target.value;
    // console.log(data);
    setComment(data);
  };
  const handleSubmit = () => {
    const options = {
      id,
      comment,
    };
    postComment(options);
    console.log(comment);
    console.log(' Submit');
    console.log(isError, isLoading, isSuccess);
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
        {data?.comments.map((comment: string, index: number) => (
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
