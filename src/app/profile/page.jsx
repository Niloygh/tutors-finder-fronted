'use client'
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5' >
                <Avatar className='h-20 w-20'>
                    <Avatar.Image
                        alt={"user?.name"}
                        src={'https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f'}
                        referrerPolicy="no-referrer" />
                    {/* <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback> */}
                </Avatar>

                <h2 className='text-xl font-semibold'>{"user?.name"}</h2>
                <p className='text-muted'>{"user?.email"}</p>

                {/* <UpdateUserModal /> */}
                
            </Card>
        </div>
    );
};

export default ProfilePage;