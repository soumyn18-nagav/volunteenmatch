import 'react-native-get-random-values';
import { init } from '@instantdb/react-native';

const APP_ID = '39c4a757-6234-4c75-bd22-06ba5ade0c03';

export const db = init({ appId: APP_ID });
