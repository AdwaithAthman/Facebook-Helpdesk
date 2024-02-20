import { Server } from 'http';
import configKeys from './configKeys';

const serverConfig = (server: Server) => {
    const startServer = () => {
        server.listen(configKeys.PORT, () => {
            console.log(`Server is running on port ${configKeys.PORT}`);
        });
    }

    return {
        startServer
    }
}

export default serverConfig;