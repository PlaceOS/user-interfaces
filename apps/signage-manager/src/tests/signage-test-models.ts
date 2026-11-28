import {
    assert,
    Group,
    type GroupInput,
    GroupUser,
    type GroupUserInput,
    parseResponse,
    type Schema,
    User,
    type UserInput,
} from '@placeos/ts-client';

/**
 * Typed test data for the types that only the tests build. The app builds
 * signage data with `app/signage-models.ts`.
 */

function model<O, I>(schema: Schema<O, I>, data: I): O {
    const result = parseResponse(schema, data, { missing_fields: 'zero' });
    assert(result.ok, 'the test data matches the schema');
    return result.value;
}

export function signageGroup(data: GroupInput = {}): Group {
    return model(Group, {
        id: '',
        name: '',
        description: '',
        subsystems: [],
        ...data,
    });
}

export function signageGroupUser(data: GroupUserInput = {}): GroupUser {
    return model(GroupUser, {
        user_id: '',
        group_id: '',
        permissions: 0,
        ...data,
    });
}

export function signageUser(data: UserInput = {}): User {
    return model(User, { id: '', name: '', email: '', ...data });
}
