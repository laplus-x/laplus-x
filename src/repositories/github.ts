import { boundMethod } from 'autobind-decorator';
import { stringify } from "qs";

interface User {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
}

interface Reactions {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
}

interface SubIssuesSummary {
    total: number
    completed: number
    percent_completed: number
}

export interface Issue {
    url: string
    repository_url: string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: number
    node_id: string
    number: number
    title: string
    user: User
    labels: any[]
    state: 'open' | 'closed'
    locked: boolean
    assignee: User | null
    assignees: User[]
    milestone: any | null
    comments: number
    created_at: string
    updated_at: string
    closed_at: string | null
    author_association: string
    active_lock_reason: string | null
    sub_issues_summary: SubIssuesSummary
    body: string | null
    closed_by: User | null
    reactions: Reactions
    timeline_url: string
    performed_via_github_app: any | null
    state_reason: string | null
}

export interface QueryOptions {
    page: number
    per_page: number

    sort?: string
    direction?: string

    labels?: string[]
}

export interface IssueDetail {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: User;
    labels: any[];
    state: string;
    locked: boolean;
    assignee: null | any;
    assignees: any[];
    milestone: null | any;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    author_association: string;
    active_lock_reason: string | null;
    sub_issues_summary: SubIssuesSummary;
    body: string;
    closed_by: null | any;
    reactions: Reactions;
    timeline_url: string;
    performed_via_github_app: null | any;
    state_reason: string | null;
}


export class Github {
    private readonly BASE: string = `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_USER}/${import.meta.env.VITE_GITHUB_REPO}`

    private static instance?: Github;

    public static getInstance() {
        this.instance ??= new Github();
        return this.instance
    }

    @boundMethod
    public async queryIssue(options: QueryOptions = { page: 1, per_page: 10 }) {
        const q = stringify(options, { arrayFormat: 'comma' })
        const url = `${this.BASE}/issues?${q}`

        const resp = await fetch(url, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_SECRET}`
            }
        })
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status} - ${resp.statusText}`);
        }

        const data: Issue[] = await resp.json()
        return data
    }

    @boundMethod
    public async getIssue(id: number) {
        const url = `${this.BASE}/issues/${id}`;

        const resp = await fetch(url, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_SECRET}`
            }
        })
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status} - ${resp.statusText}`);
        }

        const data: IssueDetail = await resp.json();
        return data;
    }
}