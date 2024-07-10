const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@어쩌구'
    },
    {
        name: 'Kristen Ramos',
        email: '크리스틴~~@'
    }
]


export default function Example() {
    return (
        <ul className = "divide-y divide-gray-200">
            {people.map((person) => (
                <li key = {person.email} className = "py-4 flex">
                    <div className= 'ml-3'>
                        <p className = "text-sm font-medium text-gray-900">{person.name}</p>
                        <p className = "text-sm text-gray-500">{person.email}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}



function HockeyTeamItem({ team }) {
    return (
        <li className = "py-4 flex">
            <div className = "ml-3">
                <p className = "text-sm font-medium text-gray-900">{team.name}</p>
                <p className = "text-sm tex-gray-500">{team.city}</p>
            </div>
        </li>
    )
}


export default function HockeyTeamList({ teams }) {
    return (
        <ul className = "divide-y divide-gray-200">
            {teams.map((team) => <HockeyTeamItem key = {team.id} team={team}  />)}
        </ul>
    )
}

//테일윈드 UI는 고정되어 있다기보다는 블루프린트, 패턴, 아이디어의 집합에 가깝다......?