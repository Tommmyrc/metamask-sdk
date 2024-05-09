"use strict";(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[668],{"./src/design-system/components/Avatars/Avatar/variants/AvatarAccount/README.md":module=>{module.exports='# AvatarAccount\n\nAvatarAccount is a component that renders an avatar based on the users account address.\n\n## Props\n\nThis component extends [AvatarBaseProps](../AvatarBase/AvatarBase.types.ts#L17) from [AvatarBase](../Avatar/Avatar.tsx) component.\n\n### `type`\n\nOptional enum to select the avatar type between `JazzIcon` and `Blockies`.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |\n| [AvatarAccountType](./AvatarAccount.types.ts#L2)    | Yes                                                     | JazzIcon                                               |\n\n### `accountAddress`\n\nAn Ethereum wallet address.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ |\n| string                                              | Yes                                                     |\n\n## Usage\n\n```javascript\n// Replace import with relative path.\nimport AvatarAccount, {\n  AvatarAccountType,\n} from \'app/component-library/components/Avatars/Avatar/variants/AvatarAccount\';\nimport { AvatarSize } from \'app/component-library/components/Avatars/Avatar/Avatar\';\n\n<AvatarAccount\n  type={AvatarAccountType.Jazzicon}\n  accountAddress={ACCOUNT_ADDRESS}\n  size={AvatarSize.Md}\n/>;\n```\n'}}]);