export const getList = () => {
    return fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
        .then(data => data.json())
};