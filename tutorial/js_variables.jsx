function solution(strings) {
    let answer = [];

    for (let i = 0; i < strings.length; i++){
        strings[i] = strings[i][n] + strings[i];
    }

    strings.sort();

    for(let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j]);
    }

    return answer;
}


def solution(strings, n):
	answer = []
    for i in ran ge(len(strings)):
        strings[i] = strings[i][n] + strings[i]
    
    strings.sort()

    for j in ran ge (len(strings)):
        answer.append(strings[j][1:])
	return answer