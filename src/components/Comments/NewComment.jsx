import React, { useState } from 'react'
import Form from '../Form/Form'
import { Rate } from 'antd';
import Button from '../Button/Button';

const NewComment = () => {
    const [comment, setComment] = useState("")
    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    console.log(comment);
    return (
        <div>
            <Rate />
            <Form
                holder={"Write your review about product"}
                type="text"
                name="review"
                onChange={handleChange} />

            <Button
                type="submit"
                variant="outline"
                size="xs"
                text="Send"
                onClick={handleSubmit} />

        </div>
    )
}

export default NewComment