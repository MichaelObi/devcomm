<?php

namespace App\Repositories\User;

interface UserContract {
	public function findOne($id);
	public function findAll();
	public function create($request);
	public function edit($id, $request);
	public function remove($id);
	public function findUsersInStates(...$states);
	public function getStateCommunityMemberCount($state);
	public function getStatesWithCommunityMemberCount();
    public function findOrCreateUser($githubUser);
}