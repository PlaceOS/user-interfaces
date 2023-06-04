import { Pipe } from '@angular/core';

import { AssetGroup } from './asset.class';
import { showAssetGroup } from './assets.fn';

const ASSET_GROUP_LIST: AssetGroup[] = [];

const EMPTY_ASSET_GROUP = new AssetGroup();

export function updateAssetGroupList(assetgroup_list: AssetGroup[]) {
    for (const assetgroup of assetgroup_list) {
        if (!ASSET_GROUP_LIST.find(({ id }) => id === assetgroup.id)) {
            ASSET_GROUP_LIST.push(assetgroup);
        }
    }
}

@Pipe({
    name: 'assetgroup',
})
export class AssetGroupPipe {
    /**
     * Get details of the assetgroup with the given ID
     * @param assetgroup_id ID or Email of the assetgroup
     */
    public async transform(group_id: string): Promise<AssetGroup> {
        if (!group_id) return EMPTY_ASSET_GROUP;
        let asset_group = ASSET_GROUP_LIST.find(({ id }) => id === group_id);
        if (asset_group) return asset_group;
        const group = await showAssetGroup(group_id)
            .toPromise()
            .catch((_) => null);
        if (group) {
            asset_group = { ...group };
            ASSET_GROUP_LIST.push(asset_group);
            return asset_group;
        }
        return EMPTY_ASSET_GROUP;
    }

    public updateAssetGroupList(assetgroup_list: AssetGroup[]) {
        updateAssetGroupList(assetgroup_list);
    }
}
