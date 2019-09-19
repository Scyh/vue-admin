export const filterRoutes = (routes, user_grade, result = []) => {
    routes.forEach(i => {
        let _i = { ...i };
        delete _i.children;
        if (i.grade >= user_grade) result.push(_i);
        if (i.children) {
            !_i.children && (_i.children = []);
            filterRoutes(i.children, user_grade, _i.children)
        };
    });
    return result;
}