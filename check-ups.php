<?php

function connect()
{
    static $connection = null;

    if (null === $connection) {
        $connection = mysqli_connect('host', 'user', 'pass', 'db_name') or die('connection Error');
    }

    return $connection;
}

function getCheckUp($id)
{
    $id = mysqli_real_escape_string(connect(), $id);
    $result = mysqli_query(connect(), "select id, h3, list, old_price, real_price where id = '$id' limit 1");
    $result = mysqli_fetch_assoc($result);
    $list = mysqli_fetch_all(mysqli_query(connect(), "select li, description from id
    RIGHT JOIN list ON check-ups.id = list.id
    where check-ups.id = $id"), MYSQLI_ASSOC);

    mysqli_close(connect());
    return $list;
    return $result;
};
