
dir=$1
branch=$2

echo "post-gitsync.sh"
chown -R www-data $dir/web/public-out
chown -R www-data $dir/bin/*
