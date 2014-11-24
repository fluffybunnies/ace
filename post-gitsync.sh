
dir=$1
branch=$2

echo "post-gitsync.sh $dir $branch"

# let php do stuff...
chown -R www-data $dir/out
chown -R www-data $dir/web/public-out
chown -R www-data $dir/bin/*
