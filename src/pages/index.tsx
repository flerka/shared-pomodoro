import { Flex, Container } from '@chakra-ui/react';

const IndexPage = () => (
    <Container maxW="container.xl" p={0}>
        <Flex
            h={{ base: 'auto', md: '100vh' }}
            py={[0, 10, 20]}
            direction={{ base: 'column-reverse', md: 'row' }}
        >
            <p>Share your tomatoes!</p>
        </Flex>
    </Container>
);

export default IndexPage;