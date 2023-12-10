// app/providers.js
'use strict';

import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }) {
    return <ChakraProvider>{children}</ChakraProvider>;
}
