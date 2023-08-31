import React from 'react'
import { Text } from '@chakra-ui/react';

interface ProfileProps {
    setUser: (user: object | null) => void;
    user: object | null;
}

const Profile = ({setUser, user}: ProfileProps) => {
    return (
        <Text>
            Hello Extractor user!
        </Text>
    )
}

export default Profile;