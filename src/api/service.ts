import axiosHelper from './axios-helper';

export default {
    getCategories() {
        return axiosHelper.get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
    },
    getQuestions() {
        return axiosHelper.get('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
    },
}