import { get } from '../index';
import urls from '../urls';

export const getProfilesRequest = () => get(urls.profile.getProfile);
