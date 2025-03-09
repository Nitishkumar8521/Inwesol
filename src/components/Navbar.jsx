// import React from "React"
// import { Link } from "react-router-dom";

// export default function Navbar(){
//     return (
//         <div>
//             <Link to='/contact'>Contact</Link>
//             <Link to='/'>Blog</Link>
//         </div>
//     )
// }

import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Box 
            as="nav"
            bg="blue.600"
            color="white"
            px={6}
            py={4}
            position="fixed"
            top={0}
            left={0}
            width="100%"
            zIndex={1000}
            boxShadow="md"
        >
            <Flex justify="space-between" align="center">
                <Button as={Link} to="/" variant="ghost" color="white" fontSize="lg" _hover={{ bg: "blue.500" }}>
                    Blog
                </Button>
                <Button as={Link} to="/contact" variant="ghost" color="white" fontSize="lg" _hover={{ bg: "blue.500" }}>
                    Contact
                </Button>
            </Flex>
        </Box>
    );
}
