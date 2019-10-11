const calculateTasks = (numOfStories, tasksPerStory) => {
    return numOfStories * tasksPerStory
}

const taskCalculator = new Vue({
    el: '#taskCalculator',
    data: {
        countOfStories: 1,
        avgTasksPerStory: 1
    },
    computed: {
        totalTasks: function () {
            const countOfStories = parseInt(this.countOfStories)
            const avgTasksPerStory = parseInt(this.avgTasksPerStory)

            return `The total number of tasks is: ${calculateTasks(countOfStories, avgTasksPerStory)}`
        }
    }
})