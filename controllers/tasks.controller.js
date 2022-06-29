module.exports.home = (req, res) => {
    res.redirect('/search');
}

const tasks = ['hola', 'payo', 'queloque']
const asdfasdf = [{id: 1, value: 'Holaaaa'}, {id: 2, value: 'payoooo'}, {id: 3, value: 'queloque'}]

module.exports.search = (req, res) => {
    const processTask = tasks.reduce((acc, cur, index) => {
        if (!index) {
            acc = [{id: index + 1,  value: cur}];
        } else {
            acc.push({id: index + 1, value: cur});
        }
        return acc;
    }, [])
    res.render('tasks/tasks', { processTask });
}