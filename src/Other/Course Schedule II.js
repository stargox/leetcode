// url: https://leetcode.com/problems/course-schedule-ii/

var findOrder = function(numCourses=2, prerequisites=[[0,1]]) {
    let prevCoursesMap = Array(numCourses).fill(undefined);
    var nextCoursesMap = Array(numCourses).fill(undefined);

    for (let [course, prevCourse] of prerequisites) {
        const prevCourses = prevCoursesMap[course] || new Set();
        prevCourses.add(prevCourse);
        prevCoursesMap[course] = prevCourses;

        const nextCourses = nextCoursesMap[prevCourse] || new Set();
        nextCourses.add(course);
        nextCoursesMap[prevCourse] = nextCourses;
    }

    const results = [];
    const visitNextCourses = (courses, prevCourse) => {
        if (!courses) return;

        for (let course of courses) {
            const isPrevCourseOfAnotherCourse = (prevCoursesMap[course]?.size ?? 0) > 1;
            if (isPrevCourseOfAnotherCourse) {
                prevCoursesMap[course].delete(prevCourse);
                continue;
            }

            results.push(course);

            visitNextCourses(nextCoursesMap[course], course)
        }
    }

    for (let course = 0; course < numCourses; course++) {
        const isRootCourse = prevCoursesMap[course] === undefined;
        if (!isRootCourse) continue;

        results.push(course);
        visitNextCourses(nextCoursesMap[course], course);
    }

    return results.length !== numCourses ? [] : results;
};


findOrder(4, [[1,0],[2,0],[3,1],[3,2]]);