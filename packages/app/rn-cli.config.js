const path = require('path');

const extraNodeModules = {
  'react': path.resolve(__dirname, 'node_modules/react'),
  'react-native': path.resolve(__dirname, 'node_modules/react-native')
};
const blacklistRegexes = [
  /[/\\]Users[/\\]adrian.hartanto[/\\]Desktop[/\\]symlink-metro[/\\]packages[/\\]shared[/\\]node_modules[/\\]react-native[/\\].*/
];
const watchFolders = [
  path.resolve('/Users/adrian.hartanto/Desktop/symlink-metro/packages/shared')
];

const metroVersion = require('metro/package.json').version;
const metroVersionComponents = metroVersion.match(/^(\d+)\.(\d+)\.(\d+)/);
if (metroVersionComponents[1] === '0' && parseInt(metroVersionComponents[2], 10) >= 43) {
    module.exports = {
      resolver: {
        extraNodeModules,
        blacklistRE: require('metro-config/src/defaults/blacklist')(blacklistRegexes)
      },
      watchFolders
    };
} else {
    module.exports = {
      extraNodeModules,
      getBlacklistRE: () => require('metro/src/blacklist')(blacklistRegexes),
      getProjectRoots: () => [path.resolve(__dirname)].concat(watchFolders)
    };
}


