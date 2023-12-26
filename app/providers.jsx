// app/providers.js
'use strict';

import { Box, ChakraProvider, extendTheme, useBreakpointValue } from '@chakra-ui/react';


export function Providers({ children }) {

    return <ChakraProvider>{children}</ChakraProvider>;
}
