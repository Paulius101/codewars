function myLanguages(results) {
    return Object.keys(results).filter(v => results[v] >= 60).sort((a, b) => results[b] - results[a])
}



/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)
*/